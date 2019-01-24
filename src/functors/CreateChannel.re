module type Config = {
  type channel;
}

module Make = (Config: Config) => {
  type channel = Config.channel;
}