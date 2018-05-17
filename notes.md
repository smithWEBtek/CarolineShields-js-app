MODELS:
  -Player
    -has_many :teams
    -has_many :sports, :through teams
    -Fields: Name, Age, Address
  -Sport
    -has_many :teams
    -has_many :players, through :teams
    -Fields: Name, 
  -Team
    -belongs_to :player
    -belongs_to :sport
    -Fields: Name, player_id, sport_id, position
  