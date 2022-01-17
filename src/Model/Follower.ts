type Name = {
  title : string,
  first :string,
  last : string
}

type Picture = {
    large : string,
    medium : string,
    thumbnail : string
}

export type Follower = {
    name : Name,
    picture : Picture
} 