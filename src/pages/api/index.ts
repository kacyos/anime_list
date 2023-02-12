import { api } from "./api";
interface GetAnimeOptions {
  /**
   * The page number to retrieve. Default is 1.
   */
  page?: number;

  /**
   * The number of items per page. Default is 20.
   */
  size?: number;

  /**
   * A search term to use for filtering results.
   */
  search?: string;

  /**
   * A genre to use for filtering results.
   */
  genres?: string;

  /**
   * The property to sort the results by.
   */
  sortBy?: string;

  /**
   * The sort order.
   */
  sortOrder?: string;
}

/**
 * Default options used for the `getAnimes` function.
 */
const DEFAULT_OPTIONS: GetAnimeOptions = {
  page: 1,
  size: 20,
};

/**
 * Retrieves a list of animes from an API.
 *
 * @param options - { page, size, search, genres, sortBy, sortOrder } - The options to use for filtering and sorting the results.
 * @returns The data returned from the API.
 * @throws An error if there was a problem calling the API.
 */
export const getAnimes = async (options: GetAnimeOptions = DEFAULT_OPTIONS) => {
  try {
    const { page, size, search, genres, sortBy, sortOrder } = {
      ...DEFAULT_OPTIONS,
      ...options,
    };

    const response = await api.get("/anime", {
      params: {
        page,
        size,
        search,
        genres,
        sortBy,
        sortOrder,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
