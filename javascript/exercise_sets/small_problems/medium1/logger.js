// Why will the following code log 'debugging'?

function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// Due to lexical scoping rules, `logger` can access variables declared in
// any outer scopes. Since the body of the `debugIt` function is an outer
// scope relative to `logger`, `status` is accessible on line 6.
