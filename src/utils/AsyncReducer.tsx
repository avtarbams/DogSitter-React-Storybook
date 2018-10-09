import loading from "../Constants/loading";


export default function AsyncReducer(actionType:string, property:any) {
  const startedType = `${actionType}_STARTED`;
  const succeededType = `${actionType}_SUCCEEDED`;
  const failedType = `${actionType}_FAILED`;

  return (state:object, action:any) => {
    if (action.type === startedType) {
      return {
        ...state,
        [property]: {
          ...state[property],
          loading: loading.STARTED
        }
      };
    } else if (action.type === succeededType) {
      return {
        ...state,
        [property]: {
          ...state[property],
          loading: loading.SUCCEEDED,
          data: action.payload
        }
      };
    } else if (action.type === failedType) {
      return {
        ...state,
        [property]: {
          ...state[property],
          loading: loading.FAILED
        }
      };
    }
    return state;
  };
}