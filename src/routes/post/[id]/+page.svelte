<script lang="ts">
    import type { Post } from '../../../types/post';

    export let data;

    let error = data.error;

    let post: Post|null = data.post;

    let user: any = post?.author;

    let likePost = async () => {}

    let retweet = async () => {}

    let bookmarkPost = async () => {}
</script>

<div class="w-11/12 mt-10 flex flex-col items-center mx-auto min-h-screen ">
    {#if error}
    <div class="p-4 bg-primary/40 border-primary/60 border-2 border-dashed rounded-md w-full">
        <p class="text-lg font-bold text-white">{error}</p>
    </div>
    {/if}
    {#if !post}
    <div class="p-4 bg-primary/40 border-primary/60 border-2 border-dashed rounded-md w-full">
        <p class="text-lg font-bold text-white">Could not find post.</p>
    </div>
    {:else}
    <div class="flex flex-col gap-2 w-full items-center bg-primary/5 rounded-md py-6">
        <div class="w-10/12 flex flex-row justify-between items-center">
            <div class="flex flex-col">
                {#if user.user.userName}
                <p class="text-primary font-bold">
                    {user.user.userName}
                </p>
                {/if}
                <p class="text-primary/80">
                    @{user.user.userTag}
                </p>
            </div>
        </div>
        <p class="text-primary w-10/12">
            {post.content}
        </p>
        <div class="flex flex-row justify-between items-center w-10/12">
            <span class="flex flex-row gap-1 items-center min-w-fit">
                <i 
                    class="flex items-center justify-center bx bx-heart text-lg text-primary w-10 h-10 rounded-full hover:bg-red-300 hover:text-white duration-300 ease-in-out cursor-pointer"
                    on:click={likePost}
                ></i>
                <p class="text-primary text-sm font-semibold">{post.likesCount}</p>
            </span>
            <span class="flex flex-row gap-1 items-center min-w-fit">
                <i 
                    class="flex items-center justify-center bx bx-sync text-lg text-primary w-10 h-10 rounded-full hover:bg-blue-300 hover:text-white duration-300 ease-in-out cursor-pointer"
                    on:click={() => retweet()}
                ></i>
            </span>
            <span class="flex flex-row gap-1 items-center min-w-fit">
                <i 
                    class="flex items-center justify-center bx bx-bookmark text-lg text-primary w-10 h-10 rounded-full hover:bg-blue-300 hover:text-white duration-300 ease-in-out cursor-pointer"
                    on:click={() => bookmarkPost()}
                ></i>
            </span>
        </div>
    </div>
    <div></div>
    {/if}
</div>
