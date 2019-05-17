import FirebaseContext, { withFirebase } from './context';
import Firebase from './Firebase';
import useQuery from './useQuery';
import useDoc from './useDoc';
import useAuth from './useAuth';

export default Firebase;

export { FirebaseContext, withFirebase, useQuery, useAuth, useDoc };