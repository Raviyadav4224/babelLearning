function addComment() {
  return {
    visitor: {
      FunctionDeclaration(path) {
        path.addComment("leading", "FROM_CUSTOM_PLUGIN : This is a function");
      },
    },
  };
}

export default addComment;
