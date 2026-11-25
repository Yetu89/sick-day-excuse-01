# The Funniest Sick-Day Excuse

[![make.fun · u-zeroxfive-the-funniest-sick-day-excuse-37423a36](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/Yetu89/sick-day-excuse-01/rank.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/Yetu89/sick-day-excuse-01/reward.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

Entry for the [make.fun](https://make.fun) bounty **The Funniest Sick-Day Excuse**
([bounty page](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)): one line, under
200 characters, a funny reason to call in sick that someone could actually send. Free entry.

## The line

> Can't come in — my cat stepped on my keyboard and emailed my resignation to the whole office, so I'm spending today un-resigning.

(129 characters, one line, no trailing newline.)

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. For local testing, override
the output directory:

```sh
OUTPUT_DIR=/tmp/sick-day-excuse-out node main.ts
```

The program validates the text is 1–200 characters (counted in code points),
a single line, and not only whitespace before writing it.

## License

MIT — see [LICENSE](LICENSE).
