// -- Erroneous program --
// This program will not execute as written; the trailing whitespace on line 8
// will result in a syntax error as the interpreter is unable to parse that
// portion of the code.
//
// After having reasearched into this, I am uncertain why exactly this is the
// case. I would surmise that the interpreter is implemented such that it expects
// only a newline character after the backslash and will not permit anything else.


const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                   ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                   dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                   ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                   diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \a
                   hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);