import { Err, Ok, type Result } from "./result";

export const fetchData = async <T = unknown, E = undefined>(
  url: string,
  _fetch?: (
    input: URL | RequestInfo,
    init?: RequestInit | undefined,
  ) => Promise<Response>,
): Promise<Result<T, E>> => {
  try {
    const result = await (_fetch || fetch)(url);
    const response: T = await result.json();

    return Ok(response);
  } catch (error) {
    return Err(error as E);
  }
};
