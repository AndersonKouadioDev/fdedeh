export enum UtilisateurRole {
  AGENT = "AGENT",
  CHEF_SERVICE = "CHEF_SERVICE",
  CONSUL = "CONSUL",
  ADMIN = "ADMIN",
}

export enum UtilisateurType {
  DEMANDEUR = "DEMANDEUR",
  PERSONNEL = "PERSONNEL",
}

export enum UtilisateurStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  DELETED = "DELETED",
}

export interface IUtilisateur {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: UtilisateurRole;
  type: UtilisateurType;
  status: UtilisateurStatus;
  isPasswordChangeRequired: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface IUtilisateursParams {
  type?: UtilisateurType;
  status?: UtilisateurStatus;
  role?: UtilisateurRole;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  page?: number;
  limit?: number;
}
export interface IUtilisateurStatsResponse {
  allUsers: number;
  allUsersSeries: { date: string; value: number }[]
  activeUsers: number;
  activeUsersSeries: { date: string; value: number }[]
  inactiveUsers: number;
  inactiveUsersSeries: { date: string; value: number }[]
  bannedUsers: number;
  bannedUsersSeries: { date: string; value: number }[]
}

export interface IUtilisateurAddUpdateResponse extends Pick<IUtilisateur,
  'id' | 'email' | 'firstName' | 'lastName' | 'phoneNumber' | 'role' | 'type'
  | 'status' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'isPasswordChangeRequired'> {
  generatedPassword: string
}

export interface IUtilisateurActiveDesactiveDeleteResponse {
  success: true,
  message: 'Utilisateur activé avec succès.',
};