class LocalStorageMock {
    private store: { [key: string]: string } = {};

    getItem(key: string): string | null {
      return this.store[key] || null;
    }

    setItem(key: string, value: string): void {
      this.store[key] = value.toString();
    }

    removeItem(key: string): void {
      delete this.store[key];
    }

    clear(): void {
      this.store = {};
    }
  }

  export default new LocalStorageMock();
