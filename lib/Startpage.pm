package Startpage;
use Mojo::Base 'Mojolicious';

use Geo::IP;

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

  # Set static directory
  my $client_folder = $self->app->home->child('client', 'dist');
  push @{$self->app->static->paths}, $client_folder;

  # Configure the application
  $self->secrets($config->{secrets});

  # Router
  my $r = $self->routes;

  $r->get(
    "/api/ip-info" => sub {
      my $c = shift;

      $c->render(json => {"ip" => []});
    }
  );

  # Re-route all index.html file
  $r->get("/" => sub { reply_with_index(@_) });
  $r->get("*" => sub { reply_with_index(@_) });
}

1;
