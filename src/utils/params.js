function constructSearchParams(input) {
    return Object.fromEntries(
        input
          .slice(1)
          .split("&")
          .map((param) => param.split("="))
      );
}

export {constructSearchParams}