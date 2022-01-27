import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// node_modules/jotai/esm/index.mjs
init_react();
var import_react = __toModule(require_react());
var SUSPENSE_PROMISE = Symbol();
var isSuspensePromise = (promise) => !!promise[SUSPENSE_PROMISE];
var isSuspensePromiseAlreadyCancelled = (suspensePromise) => !suspensePromise[SUSPENSE_PROMISE].c;
var cancelSuspensePromise = (suspensePromise) => {
  var _a, _b;
  (_b = (_a = suspensePromise[SUSPENSE_PROMISE]).c) == null ? void 0 : _b.call(_a);
};
var isEqualSuspensePromise = (oldSuspensePromise, newSuspensePromise) => {
  const oldOriginalPromise = oldSuspensePromise[SUSPENSE_PROMISE].o;
  const newOriginalPromise = newSuspensePromise[SUSPENSE_PROMISE].o;
  return oldOriginalPromise === newOriginalPromise || oldSuspensePromise === newOriginalPromise || isSuspensePromise(oldOriginalPromise) && isEqualSuspensePromise(oldOriginalPromise, newSuspensePromise);
};
var createSuspensePromise = (promise) => {
  const objectToAttach = {
    o: promise,
    c: null
  };
  const suspensePromise = new Promise((resolve) => {
    objectToAttach.c = () => {
      objectToAttach.c = null;
      resolve();
    };
    promise.then(objectToAttach.c, objectToAttach.c);
  });
  suspensePromise[SUSPENSE_PROMISE] = objectToAttach;
  return suspensePromise;
};
var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var hasInitialValue = (atom2) => "init" in atom2;
var READ_ATOM = "r";
var WRITE_ATOM = "w";
var COMMIT_ATOM = "c";
var SUBSCRIBE_ATOM = "s";
var RESTORE_ATOMS = "h";
var DEV_SUBSCRIBE_STATE = "n";
var DEV_GET_MOUNTED_ATOMS = "l";
var DEV_GET_ATOM_STATE = "a";
var DEV_GET_MOUNTED = "m";
var createStore = (initialValues) => {
  const committedAtomStateMap = /* @__PURE__ */ new WeakMap();
  const mountedMap = /* @__PURE__ */ new WeakMap();
  const pendingMap = /* @__PURE__ */ new Map();
  let stateListeners;
  let mountedAtoms;
  if (typeof process === "object" && true) {
    stateListeners = /* @__PURE__ */ new Set();
    mountedAtoms = /* @__PURE__ */ new Set();
  }
  if (initialValues) {
    for (const [atom2, value] of initialValues) {
      const atomState = { v: value, r: 0, d: /* @__PURE__ */ new Map() };
      if (typeof process === "object" && true) {
        Object.freeze(atomState);
        if (!hasInitialValue(atom2)) {
          console.warn("Found initial value for derived atom which can cause unexpected behavior", atom2);
        }
      }
      committedAtomStateMap.set(atom2, atomState);
    }
  }
  const suspensePromiseCacheMap = /* @__PURE__ */ new WeakMap();
  const addSuspensePromiseToCache = (version, atom2, suspensePromise) => {
    let cache = suspensePromiseCacheMap.get(atom2);
    if (!cache) {
      cache = /* @__PURE__ */ new Map();
      suspensePromiseCacheMap.set(atom2, cache);
    }
    suspensePromise.then(() => {
      if (cache.get(version) === suspensePromise) {
        cache.delete(version);
        if (!cache.size) {
          suspensePromiseCacheMap.delete(atom2);
        }
      }
    });
    cache.set(version, suspensePromise);
  };
  const cancelAllSuspensePromiseInCache = (atom2) => {
    const versionSet = /* @__PURE__ */ new Set();
    const cache = suspensePromiseCacheMap.get(atom2);
    if (cache) {
      suspensePromiseCacheMap.delete(atom2);
      cache.forEach((suspensePromise, version) => {
        cancelSuspensePromise(suspensePromise);
        versionSet.add(version);
      });
    }
    return versionSet;
  };
  const versionedAtomStateMapMap = /* @__PURE__ */ new WeakMap();
  const getVersionedAtomStateMap = (version) => {
    let versionedAtomStateMap = versionedAtomStateMapMap.get(version);
    if (!versionedAtomStateMap) {
      versionedAtomStateMap = /* @__PURE__ */ new Map();
      versionedAtomStateMapMap.set(version, versionedAtomStateMap);
    }
    return versionedAtomStateMap;
  };
  const getAtomState = (version, atom2) => {
    if (version) {
      const versionedAtomStateMap = getVersionedAtomStateMap(version);
      let atomState = versionedAtomStateMap.get(atom2);
      if (!atomState) {
        atomState = getAtomState(version.p, atom2);
        if (atomState) {
          if ("p" in atomState) {
            atomState.p.then(() => versionedAtomStateMap.delete(atom2));
          }
          versionedAtomStateMap.set(atom2, atomState);
        }
      }
      return atomState;
    }
    return committedAtomStateMap.get(atom2);
  };
  const setAtomState = (version, atom2, atomState) => {
    if (typeof process === "object" && true) {
      Object.freeze(atomState);
    }
    if (version) {
      const versionedAtomStateMap = getVersionedAtomStateMap(version);
      versionedAtomStateMap.set(atom2, atomState);
    } else {
      const prevAtomState = committedAtomStateMap.get(atom2);
      committedAtomStateMap.set(atom2, atomState);
      if (!pendingMap.has(atom2)) {
        pendingMap.set(atom2, prevAtomState);
      }
    }
  };
  const createReadDependencies = (version, prevReadDependencies = /* @__PURE__ */ new Map(), dependencies) => {
    if (!dependencies) {
      return prevReadDependencies;
    }
    const readDependencies = /* @__PURE__ */ new Map();
    let changed = false;
    dependencies.forEach((atom2) => {
      var _a;
      const revision = ((_a = getAtomState(version, atom2)) == null ? void 0 : _a.r) || 0;
      readDependencies.set(atom2, revision);
      if (prevReadDependencies.get(atom2) !== revision) {
        changed = true;
      }
    });
    if (prevReadDependencies.size === readDependencies.size && !changed) {
      return prevReadDependencies;
    }
    return readDependencies;
  };
  const setAtomValue = (version, atom2, value, dependencies, suspensePromise) => {
    const atomState = getAtomState(version, atom2);
    if (atomState) {
      if (suspensePromise && (!("p" in atomState) || !isEqualSuspensePromise(atomState.p, suspensePromise))) {
        return atomState;
      }
      if ("p" in atomState) {
        cancelSuspensePromise(atomState.p);
      }
    }
    const nextAtomState = {
      v: value,
      r: (atomState == null ? void 0 : atomState.r) || 0,
      d: createReadDependencies(version, atomState == null ? void 0 : atomState.d, dependencies)
    };
    if (!atomState || !("v" in atomState) || !Object.is(atomState.v, value)) {
      ++nextAtomState.r;
      if (nextAtomState.d.has(atom2)) {
        nextAtomState.d = new Map(nextAtomState.d).set(atom2, nextAtomState.r);
      }
    } else if (nextAtomState.d !== atomState.d && (nextAtomState.d.size !== atomState.d.size || !Array.from(nextAtomState.d.keys()).every((a) => atomState.d.has(a)))) {
      Promise.resolve().then(() => {
        flushPending(version);
      });
    }
    setAtomState(version, atom2, nextAtomState);
    return nextAtomState;
  };
  const setAtomReadError = (version, atom2, error, dependencies, suspensePromise) => {
    const atomState = getAtomState(version, atom2);
    if (atomState) {
      if (suspensePromise && (!("p" in atomState) || !isEqualSuspensePromise(atomState.p, suspensePromise))) {
        return atomState;
      }
      if ("p" in atomState) {
        cancelSuspensePromise(atomState.p);
      }
    }
    const nextAtomState = {
      e: error,
      r: (atomState == null ? void 0 : atomState.r) || 0,
      d: createReadDependencies(version, atomState == null ? void 0 : atomState.d, dependencies)
    };
    setAtomState(version, atom2, nextAtomState);
    return nextAtomState;
  };
  const setAtomSuspensePromise = (version, atom2, suspensePromise, dependencies) => {
    const atomState = getAtomState(version, atom2);
    if (atomState && "p" in atomState) {
      if (isEqualSuspensePromise(atomState.p, suspensePromise)) {
        return atomState;
      }
      cancelSuspensePromise(atomState.p);
    }
    addSuspensePromiseToCache(version, atom2, suspensePromise);
    const nextAtomState = {
      p: suspensePromise,
      r: (atomState == null ? void 0 : atomState.r) || 0,
      d: createReadDependencies(version, atomState == null ? void 0 : atomState.d, dependencies)
    };
    setAtomState(version, atom2, nextAtomState);
    return nextAtomState;
  };
  const setAtomPromiseOrValue = (version, atom2, promiseOrValue, dependencies) => {
    if (promiseOrValue instanceof Promise) {
      const suspensePromise = createSuspensePromise(promiseOrValue.then((value) => {
        setAtomValue(version, atom2, value, dependencies, suspensePromise);
        flushPending(version);
      }).catch((e) => {
        if (e instanceof Promise) {
          if (isSuspensePromise(e)) {
            return e.then(() => {
              readAtomState(version, atom2, true);
            });
          }
          return e;
        }
        setAtomReadError(version, atom2, e, dependencies, suspensePromise);
        flushPending(version);
      }));
      return setAtomSuspensePromise(version, atom2, suspensePromise, dependencies);
    }
    return setAtomValue(version, atom2, promiseOrValue, dependencies);
  };
  const setAtomInvalidated = (version, atom2) => {
    const atomState = getAtomState(version, atom2);
    if (atomState) {
      const nextAtomState = __spreadProps$1(__spreadValues$1({}, atomState), {
        i: atomState.r
      });
      setAtomState(version, atom2, nextAtomState);
    } else if (typeof process === "object" && true) {
      console.warn("[Bug] could not invalidate non existing atom", atom2);
    }
  };
  const readAtomState = (version, atom2, force) => {
    if (!force) {
      const atomState = getAtomState(version, atom2);
      if (atomState) {
        if (atomState.r !== atomState.i && "p" in atomState && !isSuspensePromiseAlreadyCancelled(atomState.p)) {
          return atomState;
        }
        atomState.d.forEach((_, a) => {
          if (a !== atom2) {
            if (!mountedMap.has(a)) {
              readAtomState(version, a);
            } else {
              const aState = getAtomState(version, a);
              if (aState && aState.r === aState.i) {
                readAtomState(version, a);
              }
            }
          }
        });
        if (Array.from(atomState.d).every(([a, r]) => {
          const aState = getAtomState(version, a);
          return aState && "v" in aState && aState.r === r;
        })) {
          return atomState;
        }
      }
    }
    const dependencies = /* @__PURE__ */ new Set();
    try {
      const promiseOrValue = atom2.read((a) => {
        dependencies.add(a);
        const aState = a === atom2 ? getAtomState(version, a) : readAtomState(version, a);
        if (aState) {
          if ("e" in aState) {
            throw aState.e;
          }
          if ("p" in aState) {
            throw aState.p;
          }
          return aState.v;
        }
        if (hasInitialValue(a)) {
          return a.init;
        }
        throw new Error("no atom init");
      });
      return setAtomPromiseOrValue(version, atom2, promiseOrValue, dependencies);
    } catch (errorOrPromise) {
      if (errorOrPromise instanceof Promise) {
        const suspensePromise = createSuspensePromise(errorOrPromise);
        return setAtomSuspensePromise(version, atom2, suspensePromise, dependencies);
      }
      return setAtomReadError(version, atom2, errorOrPromise, dependencies);
    }
  };
  const readAtom = (readingAtom, version) => {
    const atomState = readAtomState(version, readingAtom);
    return atomState;
  };
  const addAtom = (addingAtom) => {
    let mounted = mountedMap.get(addingAtom);
    if (!mounted) {
      mounted = mountAtom(addingAtom);
    }
    return mounted;
  };
  const canUnmountAtom = (atom2, mounted) => !mounted.l.size && (!mounted.t.size || mounted.t.size === 1 && mounted.t.has(atom2));
  const delAtom = (deletingAtom) => {
    const mounted = mountedMap.get(deletingAtom);
    if (mounted && canUnmountAtom(deletingAtom, mounted)) {
      unmountAtom(deletingAtom);
    }
  };
  const invalidateDependents = (version, atom2) => {
    const mounted = mountedMap.get(atom2);
    mounted == null ? void 0 : mounted.t.forEach((dependent) => {
      if (dependent !== atom2) {
        setAtomInvalidated(version, dependent);
        invalidateDependents(version, dependent);
      }
    });
  };
  const writeAtomState = (version, atom2, update) => {
    let isSync = true;
    const writeGetter = (a, options) => {
      if (typeof options === "boolean") {
        console.warn("[DEPRECATED] Please use { unstable_promise: true }");
        options = { unstable_promise: options };
      }
      const aState = readAtomState(version, a);
      if ("e" in aState) {
        throw aState.e;
      }
      if ("p" in aState) {
        if (options == null ? void 0 : options.unstable_promise) {
          return aState.p.then(() => writeGetter(a, options));
        }
        if (typeof process === "object" && true) {
          console.info("Reading pending atom state in write operation. We throw a promise for now.", a);
        }
        throw aState.p;
      }
      if ("v" in aState) {
        return aState.v;
      }
      if (typeof process === "object" && true) {
        console.warn("[Bug] no value found while reading atom in write operation. This is probably a bug.", a);
      }
      throw new Error("no value found");
    };
    const setter = (a, v) => {
      let promiseOrVoid2;
      if (a === atom2) {
        if (!hasInitialValue(a)) {
          throw new Error("atom not writable");
        }
        const versionSet = cancelAllSuspensePromiseInCache(a);
        versionSet.forEach((cancelledVersion) => {
          if (cancelledVersion !== version) {
            setAtomPromiseOrValue(cancelledVersion, a, v);
          }
        });
        setAtomPromiseOrValue(version, a, v);
        invalidateDependents(version, a);
      } else {
        promiseOrVoid2 = writeAtomState(version, a, v);
      }
      if (!isSync) {
        flushPending(version);
      }
      return promiseOrVoid2;
    };
    const promiseOrVoid = atom2.write(writeGetter, setter, update);
    isSync = false;
    version = void 0;
    return promiseOrVoid;
  };
  const writeAtom = (writingAtom, update, version) => {
    const promiseOrVoid = writeAtomState(version, writingAtom, update);
    flushPending(version);
    return promiseOrVoid;
  };
  const isActuallyWritableAtom = (atom2) => !!atom2.write;
  const mountAtom = (atom2, initialDependent) => {
    const mounted = {
      t: new Set(initialDependent && [initialDependent]),
      l: /* @__PURE__ */ new Set()
    };
    mountedMap.set(atom2, mounted);
    if (typeof process === "object" && true) {
      mountedAtoms.add(atom2);
    }
    const atomState = readAtomState(void 0, atom2);
    atomState.d.forEach((_, a) => {
      const aMounted = mountedMap.get(a);
      if (aMounted) {
        aMounted.t.add(atom2);
      } else {
        if (a !== atom2) {
          mountAtom(a, atom2);
        }
      }
    });
    if (isActuallyWritableAtom(atom2) && atom2.onMount) {
      const setAtom = (update) => writeAtom(atom2, update);
      const onUnmount = atom2.onMount(setAtom);
      if (onUnmount) {
        mounted.u = onUnmount;
      }
    }
    return mounted;
  };
  const unmountAtom = (atom2) => {
    var _a;
    const onUnmount = (_a = mountedMap.get(atom2)) == null ? void 0 : _a.u;
    if (onUnmount) {
      onUnmount();
    }
    mountedMap.delete(atom2);
    if (typeof process === "object" && true) {
      mountedAtoms.delete(atom2);
    }
    const atomState = getAtomState(void 0, atom2);
    if (atomState) {
      atomState.d.forEach((_, a) => {
        if (a !== atom2) {
          const mounted = mountedMap.get(a);
          if (mounted) {
            mounted.t.delete(atom2);
            if (canUnmountAtom(a, mounted)) {
              unmountAtom(a);
            }
          }
        }
      });
    } else if (typeof process === "object" && true) {
      console.warn("[Bug] could not find atom state to unmount", atom2);
    }
  };
  const mountDependencies = (atom2, atomState, prevReadDependencies) => {
    const dependencies = new Set(atomState.d.keys());
    prevReadDependencies == null ? void 0 : prevReadDependencies.forEach((_, a) => {
      if (dependencies.has(a)) {
        dependencies.delete(a);
        return;
      }
      const mounted = mountedMap.get(a);
      if (mounted) {
        mounted.t.delete(atom2);
        if (canUnmountAtom(a, mounted)) {
          unmountAtom(a);
        }
      }
    });
    dependencies.forEach((a) => {
      const mounted = mountedMap.get(a);
      if (mounted) {
        mounted.t.add(atom2);
      } else if (mountedMap.has(atom2)) {
        mountAtom(a, atom2);
      }
    });
  };
  const flushPending = (version) => {
    if (version) {
      const versionedAtomStateMap = getVersionedAtomStateMap(version);
      versionedAtomStateMap.forEach((atomState, atom2) => {
        if (atomState !== committedAtomStateMap.get(atom2)) {
          const mounted = mountedMap.get(atom2);
          mounted == null ? void 0 : mounted.l.forEach((listener) => listener(version));
        }
      });
      return;
    }
    while (pendingMap.size) {
      const pending = Array.from(pendingMap);
      pendingMap.clear();
      pending.forEach(([atom2, prevAtomState]) => {
        const atomState = getAtomState(void 0, atom2);
        if (atomState && atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
          mountDependencies(atom2, atomState, prevAtomState == null ? void 0 : prevAtomState.d);
        }
        const mounted = mountedMap.get(atom2);
        mounted == null ? void 0 : mounted.l.forEach((listener) => listener());
      });
    }
    if (typeof process === "object" && true) {
      stateListeners.forEach((l) => l());
    }
  };
  const commitVersionedAtomStateMap = (version) => {
    const versionedAtomStateMap = getVersionedAtomStateMap(version);
    versionedAtomStateMap.forEach((atomState, atom2) => {
      const prevAtomState = committedAtomStateMap.get(atom2);
      if (atomState.r > ((prevAtomState == null ? void 0 : prevAtomState.r) || 0) || "v" in atomState && atomState.r === (prevAtomState == null ? void 0 : prevAtomState.r) && atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
        committedAtomStateMap.set(atom2, atomState);
        if (atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
          mountDependencies(atom2, atomState, prevAtomState == null ? void 0 : prevAtomState.d);
        }
      }
    });
  };
  const commitAtom = (_atom, version) => {
    if (version) {
      commitVersionedAtomStateMap(version);
    }
    flushPending(void 0);
  };
  const subscribeAtom = (atom2, callback) => {
    const mounted = addAtom(atom2);
    const listeners = mounted.l;
    listeners.add(callback);
    return () => {
      listeners.delete(callback);
      delAtom(atom2);
    };
  };
  const restoreAtoms = (values, version) => {
    for (const [atom2, value] of values) {
      if (hasInitialValue(atom2)) {
        setAtomPromiseOrValue(version, atom2, value);
        invalidateDependents(version, atom2);
      }
    }
    flushPending(version);
  };
  if (typeof process === "object" && true) {
    return {
      [READ_ATOM]: readAtom,
      [WRITE_ATOM]: writeAtom,
      [COMMIT_ATOM]: commitAtom,
      [SUBSCRIBE_ATOM]: subscribeAtom,
      [RESTORE_ATOMS]: restoreAtoms,
      [DEV_SUBSCRIBE_STATE]: (l) => {
        stateListeners.add(l);
        return () => {
          stateListeners.delete(l);
        };
      },
      [DEV_GET_MOUNTED_ATOMS]: () => mountedAtoms.values(),
      [DEV_GET_ATOM_STATE]: (a) => committedAtomStateMap.get(a),
      [DEV_GET_MOUNTED]: (a) => mountedMap.get(a)
    };
  }
  return {
    [READ_ATOM]: readAtom,
    [WRITE_ATOM]: writeAtom,
    [COMMIT_ATOM]: commitAtom,
    [SUBSCRIBE_ATOM]: subscribeAtom,
    [RESTORE_ATOMS]: restoreAtoms
  };
};
var createScopeContainer = (initialValues) => {
  const store = createStore(initialValues);
  return { s: store };
};
var ScopeContextMap = /* @__PURE__ */ new Map();
var getScopeContext = (scope) => {
  if (!ScopeContextMap.has(scope)) {
    ScopeContextMap.set(scope, (0, import_react.createContext)(createScopeContainer()));
  }
  return ScopeContextMap.get(scope);
};
var keyCount = 0;
function atom(read, write) {
  const key = `atom${++keyCount}`;
  const config = {
    toString: () => key
  };
  if (typeof read === "function") {
    config.read = read;
  } else {
    config.init = read;
    config.read = (get) => get(config);
    config.write = (get, set, update) => set(config, typeof update === "function" ? update(get(config)) : update);
  }
  if (write) {
    config.write = write;
  }
  return config;
}
var isWritable = (atom2) => !!atom2.write;
function useAtom(atom2, scope) {
  if ("scope" in atom2) {
    console.warn("atom.scope is deprecated. Please do useAtom(atom, scope) instead.");
    scope = atom2.scope;
  }
  const ScopeContext = getScopeContext(scope);
  const { s: store, w: versionedWrite } = (0, import_react.useContext)(ScopeContext);
  const getAtomValue = (0, import_react.useCallback)((version2) => {
    const atomState = store[READ_ATOM](atom2, version2);
    if ("e" in atomState) {
      throw atomState.e;
    }
    if ("p" in atomState) {
      throw atomState.p;
    }
    if ("v" in atomState) {
      return atomState.v;
    }
    throw new Error("no atom value");
  }, [store, atom2]);
  const [[version, value, atomFromUseReducer], rerenderIfChanged] = (0, import_react.useReducer)((0, import_react.useCallback)((prev, nextVersion) => {
    const nextValue = getAtomValue(nextVersion);
    if (Object.is(prev[1], nextValue) && prev[2] === atom2) {
      return prev;
    }
    return [nextVersion, nextValue, atom2];
  }, [getAtomValue, atom2]), void 0, () => {
    const initialVersion = void 0;
    const initialValue = getAtomValue(initialVersion);
    return [initialVersion, initialValue, atom2];
  });
  if (atomFromUseReducer !== atom2) {
    rerenderIfChanged(void 0);
  }
  (0, import_react.useEffect)(() => {
    const unsubscribe = store[SUBSCRIBE_ATOM](atom2, rerenderIfChanged);
    rerenderIfChanged(void 0);
    return unsubscribe;
  }, [store, atom2]);
  (0, import_react.useEffect)(() => {
    store[COMMIT_ATOM](atom2, version);
  });
  const setAtom = (0, import_react.useCallback)((update) => {
    if (isWritable(atom2)) {
      const write = (version2) => store[WRITE_ATOM](atom2, update, version2);
      return versionedWrite ? versionedWrite(write) : write();
    } else {
      throw new Error("not writable atom");
    }
  }, [store, versionedWrite, atom2]);
  (0, import_react.useDebugValue)(value);
  return [value, setAtom];
}

// app/atoms/blog.ts
init_react();
var initialState = {
  posts: []
};
var blog = atom(initialState);
var blog_default = blog;

export {
  useAtom,
  blog_default
};
//# sourceMappingURL=/build/_shared/chunk-A45GMQI6.js.map
