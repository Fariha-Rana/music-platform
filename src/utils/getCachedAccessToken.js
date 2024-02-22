"use server";
import { unstable_cache } from "next/cache";
import { getAccessToken } from "./getAccessToken";

export const _getAccessToken = unstable_cache(getAccessToken, ["access-token"], {revalidate: 1200})