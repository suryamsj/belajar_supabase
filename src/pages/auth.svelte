<script>
    import { supabase } from "../supabaseClient";
    import Swal from "sweetalert2";

    let loading = false;
    let email;

    const handleLogin = async () => {
        try {
            loading = true;
            const { error } = await supabase.auth.signIn({ email });
            if (error) throw error;
            email = "";
            Swal.fire({
                title: "Success",
                text: "Check your email to verify your account",
                icon: "success",
                confirmButtonText: "OK",
                showConfirmButton: true,
            });
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: error.message,
                icon: "error",
                confirmButtonText: "OK",
                showConfirmButton: true,
            });
        } finally {
            loading = false;
        }
    };
</script>

<form class="row flex flex-center" on:submit|preventDefault={handleLogin}>
    <div class="col-6 form-widget">
        <h1 class="header">Supabase + Svelte</h1>
        <p class="description">Sign in via magic link with your email below</p>
        <div>
            <input
                class="inputField"
                type="email"
                placeholder="Your email"
                bind:value={email}
            />
        </div>
        <div>
            <input
                type="submit"
                class="button block"
                value={loading ? "Loading" : "Send magic link"}
                disabled={loading}
            />
        </div>
    </div>
</form>
