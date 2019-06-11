---
title: Vim as my editor of choice
date: 2018-05-01 06:31:51
type: post
blog: true
tags:
    - Vim
    - Editors
    - Dev
---

I use [Vim](https://www.vim.org/) (or [vi](https://linux.die.net/man/1/vi)) for a considerable portion of my day-to-day work both professionally and recreationally. Many people after seeing me enter one hotkey after the next voraciously on my keyboard ask me why I chose [Vim](https://www.vim.org/) as my editor of choice. From that first glance, things look pretty tricky to get into I can admit, so I can't blame them! There are also arguably so many other good options on the market, many say, "Why choose Vim at all?"

Luckily, I've got an answer with a pretty long story behind it! After spending years looking at different editors, I eventually came to love Vim above all else. To potentially save someone else the years of trials I went through when choosing their go-to work environment (which doesn't have to be Vim, but should be ;) ), I'll go into some detail on why I came to my decision.

## Humble beginnings

When first looking for something to work from I was only 13. Since I had no formal education in computer science, I just had my internal goals to use as a starting point. I knew I wanted to make websites and help others manage their sites as I was starting a shared-hosting service and needed to build/maintain my site as well as help my customers. That ended up being a great place to start!

After some extensive Googling and speaking with a few friends, I came to my final list of development environments for my first HTML/CSS/JS endeavours: Notepad++, Vim, Emacs, Sublime, and maybe some others I am forgetting.  This list was a good start, as I avoided the heavier IDEs like Eclipse which would have bogged down my initial needs in HTML/CSS and light scripting. 

After some deliberation, I ended up choosing Notepad++ because as I remember it seemed lightweight and extensible.

## Years following

Eventually, I migrated to Sublime as it's plugin system was awesome; throughout the following years I tried out all of the above options I mentioned. Nothing felt right at all. Vim and Emacs felt foreign at first, Notepad++ felt clunky, and Sublime for some odd reason was not clicking. 

I wasn't sticking to one language for an extensive period either so no "holistic IDE" solution felt right. It was a mess, but I persevered swapping editors like hotcakes until I figured out what I liked.

Now around 16, with a few years of working in these environments under my belt, I had more insight into what mattered in an editor *to me*. Instead of focusing on the specific technology or project I was working on at that time, I decided to formalise to myself what I wanted from a *general editor*. 

I was hoping that formalising this list would help me make a more **permanent** decision as I'd moved around **a lot** in the years past. If you are looking to choose a long-term editor, I think making a list like this is helpful! 

## Choosing my requirements

In the end, my list of requirements looked something like this for my dream editor:

- Low profile
- Cross-platform
- Extensible with plugins
- Low barrier to entry
- Fast for work


I think a lot of these are self-evident, I just had to choose what matted to me. I want to give a bit more context to one of these: **cross-platform** as it was hugely influential in my decision. Not only did I want something "cross-platform" in that it could run on Windows, OSX, and Linux, but I also wanted something that could work from the CLI and on multiple Linux distros.

A bit before this I was diving into system administration for the first time. Using a small home server, running on an old desktop from my grandmother, I was diving head-on into a new world. It was huge, exciting, and full of intricate puzzles ready to solve. Fiddling around in nano felt inefficient for certain things, particularly when trying not to use my mouse in the CLI, I needed something better.

## The search

I had a friend of mine in high school (Shout out to Evan!) who's older brother (Cory) was more into computers than anyone I knew. He had initially helped me set up the home server on CentOS (4 or 5?), so I asked him what he thought of my quest as his opinion had a lot of weight to me.

He ended up being a fan of Emacs, and in a typical helpful fashion told me why investing in learning something like Emacs was invaluable. His reasoning made a lot of sense and made me think... Maybe I should look into something with extreme customizability and "hotkeyability" so that someday I could be like Cory, he was *so fast* in Emacs. I wanted to be like that!

Vim vs. Emacs. What I would later find out to be a classic battle, was on! I took to researching both candidates extensively. I read multiple StackExchange/StackOverflow threads, HackerNews / Reddit posts, Quora answers, blog posts, and more on the topic. Anything I could get my hands on, I was reading it!

Then, I looked at some interactive tutorials and worked through those to make sure I had hands-on experience with each tool. If you are ever investigating tools to use, always try to test them out yourself. I have made this mistake many times in the past; it always comes back to bite me.

## The decision

In the end, as is evident with the title of this article, I chose Vim. Why?

There are a few reasons that resonated with me after making a pro/con list for myself with each tool:

- Vim is based on Vi, which is on every Linux-based system
- Vim is just an editor, meaning it is light by default and stays light even with plugins
- Watching "pros" use Vim, their speed was aweing

Vim hit the nail on the head with a lot of my requirements. Some would argue Vim doesn't have a "**low barrier to entry**", but I would say basic Vi/Vim use is pretty damn easy! If you don't believe me, [try it out for yourself](http://www.openvim.com/) and be the judge.

## Years following

After starting to use Vim day-to-day, I quickly built out a custom .vimrc file, as well as began using [Vundle](https://github.com/VundleVim/Vundle.vim) to manage plugins (though I now recommend [Vim-Plug](https://github.com/junegunn/vim-plug)). These steps alone stepped up my game immensely.

The next level-up was syncing my dotfiles (configuration files for Vim, etc.) to a GitHub repository so I could move my environment from computer to computer. What a game-changer when formatting your laptop, or moving to a new work machine!

In the end, I settled away from custom dotfiles on my Mac going with [YADR](https://github.com/skwp/dotfiles) instead. I love using MacVim or Vim in the terminal now! I also can instantly rebuild to this setup on a new Mac from GitHub, which is excellent.

## Other ventures

Since choosing Vim as my daily driver, I've also dipped my toes into multiple other IDEs/editors. My favourite so far, by far, has been the JetBrains suite of tools. In the past, I was working on quite a lot of Django / Python, and PyCharm was phenomenal for the job. Their entire suite of tools ended up being superb.

I ended up not choosing the JetBrains suite for a few reasons. The tools took a ton of memory, particularly on my older MacBook Pro of the time. I also wasn't a huge fan of the "Vim" mode as it was incomplete. In the end, I was just a fan of most things in my Vim setup (navigating between panes in Tmux, fuzzy file searching, etc.) more than in PyCharm.

I still occasionally use other tools for work here and there, but if I can choose Vim/Vi, I almost always will. (as I write this from MacDown!)
