function constructSearchParams(input, topic) {
    const searchParams = Object.fromEntries(
        input
          .slice(1)
          .split("&")
          .map((param) => param.split("="))
      );
    if(topic) {
        searchParams["topic"] = topic
    }
    return searchParams
}

export {constructSearchParams}