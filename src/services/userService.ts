import apiClient from "./api";
import { ApiResponse } from "./errorTypes";

export interface User {
  _id: string;
  fullName: string;
  email: string;
  isVerified: boolean;
  isAdmin: boolean;
  profileImage?: string;
  balance: number;
  totalProfit: number;
  referralCode: string;
  referralCount: number;
  createdAt: string;
}

const userService = {
  // Get all users (admin only)
  getAllUsers: async (): Promise<ApiResponse<User[]>> => {
    const response = await apiClient.get<ApiResponse<User[]>>("/users/all");
    return response.data;
  },

  // Delete a user (admin only)
  deleteUser: async (userId: string): Promise<ApiResponse> => {
    const response = await apiClient.delete<ApiResponse>(`/users/${userId}`);
    return response.data;
  },
};

export default userService;
