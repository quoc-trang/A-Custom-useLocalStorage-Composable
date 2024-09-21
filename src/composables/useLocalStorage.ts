import { onUnmounted, ref, toRef, watch, watchEffect, type Ref } from "vue";

export function useLocalStorage(key: string, defaultValue: string) {
  const storage = ref(localStorage.getItem(key) ?? defaultValue);

  watchEffect(() => {
    localStorage.setItem(key, storage.value);
  });

  window.addEventListener("storage", syncChange);

  function syncChange(event: StorageEvent) {
    if (event.key) {
      storage.value = event.newValue ?? "";
    }
  }

  onUnmounted(() => {
    window.removeEventListener("storage", syncChange);
  });
  return storage;
}
