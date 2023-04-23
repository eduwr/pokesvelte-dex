import { Err, Ok, type Result } from "./result";

export const fetchData = async <T = unknown, E = undefined>(
  url: string,
): Promise<Result<T, E>> => {
  try {
    const result = await fetch(url);
    const response: T = await result.json();

    return Ok(response);
  } catch (error) {
    return Err(error as E);
  }
};
