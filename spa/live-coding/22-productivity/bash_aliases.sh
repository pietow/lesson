## IN A TERMINAL WINDOW, TYPE:
##
##   code ~/.bashrc
##
## COPY AND PASTE THE CONTENTS OF THIS FILE AT THE END
## OF YOUR ~/.bashrc FILE, THEN RUN ...
##
##   source ~/.bashrc
##
## ... IN THE TERMINAL WINDOW.
##
## SEE https://dciforks.github.io/nav-menu/ FOR MORE 
## DETAILS.


####### ADD CUSTOM alias COMMANDS TO THIS FILE #######
# If the lines...
#
#   if [ -f ~/.bash_aliases ]; then
#     . ~/.bash_aliases
#   fi

# ... are active in the file ~/.bashrc, then the alias
# commands in this file will be active too.


# Shortcut to open this file in an editor window
alias addalias='code ~/.bash_aliases'


# The items in the .bashrc file are loaded once when
# you log on. To use your new aliases immediately, you
# need to run `source ~/.bashrc` in the Terminal to
# reload this file. Here's an alias that is easier to
# remember:
alias usenew='source ~/.bashrc'

## GIT COMMANDS ##

# Automatically add all changed files and open an
# editor for the commit message. Note the use of the
# semi-colon (;) to enter two commands on one line.
alias gmit='git add .;git commit'


# cd to the top-level directory of the current git
# project (where the .git folder is stored)
alias gd='cd $(git rev-parse --show-toplevel)'


# Use the gits function to echo the location of all
# .git directories in the working directory or any of
# its parent directories. If more than one .git
# directory is found, you will need to correct this
# error.
gits() {
  found=0 # count the number of times a .git
  # directory is found
  folder=.git # folder to look for
  path=$(pwd) # start from the current working directory

  while [[ "$path" != "" ]]; do
    if [ -e "$path/$folder" ]; then
      # There is a .git folder in the directory defined
      # by $path
      ((found += 1))
      echo $folder folder found at "$path"
    fi
    path=${path%/*} # remove the last directory name
    # from $path
  done

  if [ "$found" -eq 0 ]; then
    echo No $folder folder found
  elif [ "$found" -gt 1 ]; then
    echo "$found" $folder folders found. Please correct this.
  fi
}


# git diff will open a program in the Terminal
# window that gives details of all the lines that
# have changed in any tracked file. After you run
# `npm install some-module`, the package-lock.json
# file may contain many many changes, which
# git diff will want to display.
#
# The gdiff command will call git diff with a series
# of arguments, naming the files to ignore. By
# default, this series will include all the places
# where a package-lock.json file may be found.
#
# Call it like this:
#
#   gdiff
# 
# If you want it to ignore all package-lock.json
# files PLUS some other files you can call:
#
#   gdiff -plj file-to-ignore other-file-to-ignore
#
# (-plj = not package-lock.json)
#
# If you want to see changes in package-lock.json
# but not in certain other files, call it like this:
#
#   gdiff file-to-ignore other-file-to-ignore
gdiff() {
  if [ -z "$1" ] || [ "$1" == "-plj" ]
  then
    exclude=" ':(exclude)yarn.lock'  ':(exclude)package-lock.json' ':(exclude)client/package-lock.json' ':(exclude)frontend/package-lock.json' ':(exclude)server/package-lock.json' ':(exclude)backend/package-lock.json'"
    shift
  else
    exclude=" "
  fi

  while [ ! -z "$1" ]
  do
    exclude="${exclude} ':(exclude)$1'"
    shift
  done

  exclude="git diff -- . ${exclude} $2"

  eval $exclude
}


## VS CODE COMMANDS ##

# touch a file and start to edit it in VS Code
# Any intervening folders will be created if needed
couch() {
  parentdir="$(dirname "$1")"
  mkdir -p $parentdir
  touch "$1" && code "$1"
}


## NAVIGATION COMMANDS ##

# Create a new directory then cd into it. Note the use
# of -- to indicate the end of the flags, so that you
# can create a directory whose name starts with a
# hyphen, and the directory name will not be treated
# as a flag.
mkcd() {
  mkdir -p -- "$1" && cd -P -- "$1" || return
}


# Alias to open a new window showing the directory
# containing user settings for VS Code
alias uconfig='code ~/.config/Code/User/'


# Command to create or navigate to a folder with
# today's date in YYMMDD format, and to open or create
# there a file with a given name + ".md", plus an
# executable index file that will open the named file.
#
# Example:
#
#    today exercise
#
# Creates:
# 
#    ~/Documents/DCI/211216/exercise.md
# and
#    ~/Documents/DCI/index/exercise_211216
#
# If you simply type `today`, you will be asked for a
# task name. If you press Enter without giving a task
# name, `tree` will be called to show the hierarchy of
# files and folders in today's folder. If you use
# `--list` as the task name, the hierarchy of files and
# folders in the parent directory will be shown:
#
#     today # Enter
# .
# ├── files.md
# ├── created.md
# └── today.md
#
#     today # --list
#
# ├── 211216
# │   ├── files.md
# │   ├── created.md
# │   └── today.md
# └── index
#     ├── created_211215
#     ├── files_211216
#     └── today_211216
today() {
  # <<< HARD-CODED path to your repos folder
  path="Documents/DCI"
  # HARD-CODED >>>

  # Prepare an index folder (if it does not already exist)
  index="$HOME/$path/index/"
  mkcd "$index"

  # Ask for a task name if none was given. If the
  # task remains empty, then 
  task=$1
  if [ -z "$task" ]; then
    echo "Task name (leave blank to list today's files):"
    read task
  fi

  # Get today's date in YYMMDD format
  day=$(date +'%y%m%d')

  # Ensure that the folder exists
  dir="$HOME/$path/$day"
  mkcd "$dir"

  if test -n "${task-x}"; then
    if [[ $task == "--list" ]]; then
      # Show list of files by date in the parent folder
      tree -L 2 ../
    else
      # Create an empty md file...
      code -r .
      file="$dir/$task.md"
      text="# $task
"
      echo "$text" > "$file"
      couch "$file"

      # Add an executable file in index/ that will open it
      link="$index/${task}_${day}"
      text=text=$(echo '#!/bin/bash
code -n '$dir)
      echo "$text" > "$link"
      chmod 755 "$link"
    fi
  else
    # list the files in today's folder
    tree
  fi
}