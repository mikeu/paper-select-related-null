# paper-select-related-null

This repo contains an app demonstrating an issue in
[Ember Paper](https://github.com/miguelcobain/ember-paper), in which
an empty Ember Data relationship is not recognized by a `{{paper-select}}`
component as being `null`. In particular, this prevents required elements
from actually being required, both while filling in the form and when
calculating its validity.

In this example, both the author and category `{{paper-select}}` components
include `required=true`:

![Demonstration of issue](/screenshots/demo.gif?raw=true "Demo")

Author does not have an asterisk in its label, nor does it turn red and receive
the notice that "This is required" when it is blurred without a selection.
Most importantly, not selecting an author does not prevent the button from
activating and the form being submitted.

The difference is that the author component is passed
```hbs
selected=post.author
```
while the category component is passed
```hbs
selected=(if post.category.id post.category)
```
which is initially `null`.
## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd paper-select-related-null`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
