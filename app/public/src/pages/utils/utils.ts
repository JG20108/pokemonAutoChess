export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyD-3kpfTO0svOqq2q3HiItCsGfdnZdBtsM',
  authDomain: 'pac-linkersito.firebaseapp.com',
  projectId: 'pac-linkersito',
  storageBucket: 'pac-linkersito.firebasestorage.app',
  messagingSenderId: '433303508688',
  appId: '1:433303508688:web:e9d9c93919d665225db0d5',
};

export function transformCoordinate(x: number, y: number) {
  if (y === 0) {
    return [28 * 24 + 96 * x, 808];
  } else {
    return [28 * 24 + 96 * x, 760 - 96 * y];
  }
}

export function transformAttackCoordinate(x: number, y: number, flip: boolean) {
  return [28 * 24 + 96 * x, flip ? 184 + 96 * y : 664 - 96 * y];
}

export function transformMiniGameXCoordinate(x: number) {
  return 28 * 24 + x;
}

export function transformMiniGameYCoordinate(y: number) {
  return 664 - y;
}
