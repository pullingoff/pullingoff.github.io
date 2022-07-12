(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{501:function(e,n,s){"use strict";s.r(n);var l=s(59),t=Object(l.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Facing with many errors while setting up a Jekyll github page, I'm logging it for the people like me."),s("br"),e._v("\nThe problom was, I wanted to run the local server with the instruction")]),e._v(" "),s("div",{staticClass:"language-console line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("bundle exec jekyll serve\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("but the terminal showed me "),s("strong",[e._v("Permission errors")]),e._v("."),s("br"),e._v("\nSome said I should "),s("strong",[e._v("change the system preference to give iTerm the full disk access")]),e._v(" but I don't think it was the reason."),s("br"),e._v("\nThanks to Vidyut, I "),s("strong",[e._v("solved the error")]),e._v(" and the helpful link is\n"),s("a",{attrs:{href:"https://luther.io/macos/how-to-install-latest-ruby-on-a-mac/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1)]),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"to-do-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-do-list"}},[e._v("#")]),e._v(" To do list")]),e._v(" "),s("ul",[s("li",[e._v("[ ] Delete previous Gemfile.lock")]),e._v(" "),s("li",[e._v("[ ] Install Command Line Tools for Xcode")]),e._v(" "),s("li",[e._v("[ ] Install Homebrew.")]),e._v(" "),s("li",[e._v("[ ] Install rbenv and helpers.")]),e._v(" "),s("li",[e._v("[ ] Modify your shell startup script.")]),e._v(" "),s("li",[e._v("[ ] Install Ruby.")]),e._v(" "),s("li",[e._v("[ ] Install Bundle")]),e._v(" "),s("li",[e._v("[ ] Bundle add webrick")])]),e._v(" "),s("p",[e._v("For me, it was the problem "),s("strong",[e._v("I didn't install 'Command Line Tools for Xcode'.")]),s("br"),e._v("\nAlso, you need to remove the "),s("strong",[e._v("Gemfile.lock")]),e._v(" in your github page directory before you install bundle."),s("br"),e._v("\nI followed his track and reinstalled homebrew, ruby, and jekyll."),s("br"),e._v("\nAnd after 'bundle exec jekyll serve',")]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"language-console line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" ~/H/pullingoff.github.io  on master !4  bundle exec jekyll serve\nConfiguration file: /Users/blah/blah/pullingoff.github.io/_config.yml\n            Source: /Users/blah/blah/pullingoff.github.io\n       Destination: /Users/blah/blah/pullingoff.github.io/_site\n Incremental build: disabled. Enable with --incremental\n      Generating... \n                    done in 2.645 seconds.\n Auto-regeneration: enabled for '/Users/blah/blah/pullingoff.github.io'\n                    ------------------------------------------------\n      Jekyll 4.2.1   Please append `--trace` to the `serve` command \n                     for any additional information or backtrace. \n                    ------------------------------------------------\n/Users/blah/.gem/ruby/3.1.0/gems/jekyll-4.2.1/lib/jekyll/commands/serve/servlet.rb:3:in `require': cannot load such file -- webrick (LoadError)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("hr"),e._v(" "),s("p",[e._v("Another error 😂"),s("br"),e._v("\nIt's just because "),s("strong",[e._v("webrick got out of the default gem lists.")]),s("br"),e._v("\nAll you need to do is type")]),e._v(" "),s("div",{staticClass:"language-console line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("bundle add webrick\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("then the terminal will install webrick.")]),e._v(" "),s("p",[e._v("And it works!")])])}),[],!1,null,null,null);n.default=t.exports}}]);