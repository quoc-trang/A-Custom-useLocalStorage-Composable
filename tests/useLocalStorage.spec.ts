import { describe, it, expect, beforeEach } from "vitest";
import { useLocalStorage } from "../src/composables/useLocalStorage";

const storageKey = "test";

describe("useLocalStorage", () => {
  beforeEach(function () {
    localStorage.clear();
  });
  it("should work w/ default value", () => {
    const storage = useLocalStorage(storageKey, "default");
    expect(storage.value).toBe("default");
    expect(localStorage.getItem(storageKey)).toBe("default");
  });

  it("should work w/ storage event", () => {
    const storage = useLocalStorage(storageKey, "default");
    const storageEvent = new StorageEvent("storage", {
      key: storageKey,
      newValue: "new value",
    });
    window.dispatchEvent(storageEvent);
    expect(storage.value).toBe("new value");
  });
});
