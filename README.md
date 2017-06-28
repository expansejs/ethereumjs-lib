# SYNOPSIS
[![NPM Package](https://img.shields.io/npm/v/expansejs-lib.svg?style=flat-square)](https://www.npmjs.org/package/expansejs-lib)
[Slack](https://slack.expanse.tech)  

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)  

A Javascript library of core [Expanse](http://expanse.tech) functions, forked from [EthereumJS](http://github.com/ethereumjs) as described in Ethereum [Yellow Paper](https://github.com/ethereum/yellowpaper). This is a simple meta-module that provides the following modules. Most JS modules are tracked in [expansejs](https://github.com/expansejs)

 - [VM](https://github.com/expansejs/expansejs-vm) - The Ethereum virtual machine and state processing functions
 - [Blockchain](https://github.com/expansejs/expansejs-blockchain) - Blockchain managment
 - [Block](https://github.com/expansejs/expansejs-block) - Block Schema definition and validation
 - [Transaction](https://github.com/expansejs/expansejs-tx) - Transaction Schema definition and validation
 - [Account](https://github.com/expansejs/expansejs-account) - Account Schema definition and validation
 - [rlp](https://github.com/expansejs/rlp) - Recursive Length Prefix serialization
 - [Trie](https://github.com/expansejs/merkle-patricia-tree) - Modified Merkle Patricia Tree
 - [Ethash](https://github.com/expansejs/ethashjs-exp) - Ethereum's Proof of Work algorithm
 - [utils](https://github.com/expansejs/expansejs-util) - Miscellaneous helper functions
 - [devp2p](https://github.com/expansejs/node-devp2p) - The networking protocol
 - [devp2p-dpt](https://github.com/expansejs/node-devp2p-dpt) - The disputed peer table

# BROWSER
`expansejs-lib` can be used with [`browserify`](http://browserify.org/). With the exception of the networking modules. 

# CONTRIBUTIONS

Patches welcome! Contributors are listed in the `package.json` file.
Please run the tests before opening a pull request and make sure that you are
passing all of them.

If you would like to contribute, but don't know what to work on, check
the issues list or ask on the forms or on Slack.

* [issues](http://github.com/expansejs/expansejs-lib/issues)
* [Slack](http://slack.expanse.tech)


# BUGS

When you find issues, please report them:

* [Bugs](http://github.com/expansejs/expansejs-lib/issues)

# LICENSE
[MPL-2.0](https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2))
