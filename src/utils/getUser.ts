import { supabase } from "@lib/supabase"

export const User = await supabase.auth.getUser().then((user) => {
	return user?.data?.user;
}) 