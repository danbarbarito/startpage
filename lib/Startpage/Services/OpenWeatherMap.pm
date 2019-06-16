package Startpage::Services::OpenWeatherMap;

use Mojo::Base -base;
use Mojo::JSON qw(decode_json);

use Mojo::UserAgent;

my $ua = Mojo::UserAgent->new;

has "apikey";

sub get_current_weather {
  my ($self, $lat, $lon) = @_;
  my $apikey = $self->apikey;
  my $url
    = "http://api.openweathermap.org/data/2.5/weather?lat=$lat&lon=$lon&units=imperial&appid=$apikey";
  my $res = $ua->get($url);
  return decode_json($res->result->body);
}

1;
