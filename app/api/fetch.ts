type Input = `/api/${string}`;

const myFetch = (input: Input, init?: RequestInit): Promise<Response> =>
  fetch(`${process.env.NEXTAUTH_URL}${input}`, init);

export { myFetch as fetch };
