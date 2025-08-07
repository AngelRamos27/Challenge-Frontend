export const SHARED_MESSAGES = {
  GENERAL_ERROR: "An error occurred, please try again later",
  PARSED_ERROR: "Error loading data, please try again later",
};

export const BASE_MESSAGES = {
  OK: (action: string) => `${action} successfully`,
  ERR: (action: string) => `An error ocurred while ${action}, try again`,
} as const;
