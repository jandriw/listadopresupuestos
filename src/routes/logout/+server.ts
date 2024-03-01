import { redirect, error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";


export const POST: RequestHandler = async ({ locals }) => {
    const { error : err } = await locals.supabase.auth.signOut()

    if (err) {
        throw error(500, 'Something went wrong loggin you out.')
    }

    throw redirect(303, '/')
}