<script>
  import { ToastContainer, FlatToast,BootstrapToast } from 'svelte-toasts';
</script>

<ToastContainer let:data>
  <FlatToast {data} />
</ToastContainer>

<!-- <ToastContainer let:data>
  <BootstrapToast {data} />
</ToastContainer> -->
