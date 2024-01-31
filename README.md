# tacpath-ml
Teaching myself machine learning with ml5. This builds on my Master's thesis from 2014.

## My thesis
The full thesis is available on my own site [as a PDF](https://aceade.files.wordpress.com/2014/11/philip_rowlands_mscsdd.pdf). In summary, I put two teams of bots in a team deathmatch to see if I could make them perform better by tracking where they had died, seen an enemy, or by simply avoiding wide-open spaces.

You would think that doing so would make them perform better, but I could not gather enough data to definitively prove it. Part of this was because the unbalanced maps I created; one team was badly handicapped on a particular map. However, the weightings I tried _did_ improve their performance, and on one map they were able to win 11 out of 20 matches.

[The statistics used to train the model](data/stats.csv) come from that third map. This one had the most balanced performance overall during the control tournament; the difference between the teams was only 10 deaths.

## How it works
Two teams, Blue and Orange, are in a tournament of deathmatches, each match lasting 20 minutes. The Blue team's pathfinding is based entirely around [the classic A* algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm), and they refuse to deviate from this. The Orange team will add extra weightings as follows:

- Have we lost anyone near this location?
- Have we seen enemies here?
- How exposed is this?

The page then uses [ml5](https://learn.ml5js.org/#/reference/neural-network) to create a neural network from the raw stats.

## Running locally
Any kind of server will do. I used Python's http module, which can be run with the following command:
`python -m http.server`

## Improvements
1. Allow the user to upload their own stats for comparison.
2. Add pictures of the maps.
