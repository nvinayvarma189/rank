# Rank

**Try it here:** https://nvinayvarma189.github.io/rank/


Implementation of ranking system. This is a basic approach on how websites like Stack Overlfow, Quora etc would rank answers.


The basic approach of **"Higest Upvoted answer is the best answer"** won't work because an answer with 10 upvotes and 5 downvotes is better than an answer with 15 upvotes and 20 downvotes.


However this is algorithm takes only the number of upvotes and downvotes into account. **The real life ranking problems will have to deal with many other problems like:**

1. The rating of the author (An answer by a person with high rating will be ranked higher).
2. An highly qualified person maybe new to the platform and his answers may not get enough audience and appreciation. Instead of putting the new user's answer to the last, they should be ranked a bit higher.
3. As the time goes on, the answer will be old and may not be helpful or relevant to the current technology as it changes fast.
4. An answer upvoted by people with high rating will be ranked higher ( 10 upvotes from qualified people > 20 upvotes from beginners)

And the list goes on. This Repo will be a headstart for someone who wish to build an algorithm for ranking reviews or answers.

Please Open an issue if you have any question. Open a pull request if you have new ideas to improve the algorithm.
