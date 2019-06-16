package Startpage;
use Mojo::Base 'Mojolicious';

use Startpage::Services::OpenWeatherMap;

# This method is used to send back the index.html file
sub reply_with_index {
  my $c = shift;
  $c->reply->static("index.html");
}

# This method will run once at server start
sub startup {
  my $self = shift;

  # Load configuration from hash returned by config file
  my $config = $self->plugin('Config');

  # Open Weather Map
  $self->helper(
    openweathermap => sub {
      state $openweatherservice = Startpage::Services::OpenWeatherMap->new(
        apikey => $config->{openweathermap});
    }
  );

  # Set static directory
  my $client_folder = $self->app->home->child('client', 'dist');
  push @{$self->app->static->paths}, $client_folder;

  # Configure the application
  $self->secrets($config->{secrets});

  # Router
  my $r = $self->routes;

  $r->get(
    "/api/location-info" => sub {
      my $c = shift;

      my $lat = $c->req->param('lat');
      my $lon = $c->req->param('lon');

      my $forecast = $c->openweathermap->get_current_weather($lat, $lon);

      $c->render(json => {"geolocation" => $forecast});
    }
  );

  # Re-route all index.html file
  $r->get("/" => sub { reply_with_index(@_) });
  $r->get("*" => sub { reply_with_index(@_) });
}

1;
