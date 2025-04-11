
import React from 'react';
import { 
  Users, 
  TrendingUp, 
  Gavel, 
  FileText, 
  DollarSign, 
  Settings, 
  Award, 
  MessageSquare, 
  Shield 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminDashboard = () => {
  // Mock data - would come from Supabase in a real implementation
  const stats = {
    users: 1254,
    revenue: '$24,580',
    disputes: 8,
    gigsAwaitingReview: 15
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.users}</div>
            <p className="text-xs text-muted-foreground">+180 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.revenue}</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Disputes</CardTitle>
            <Gavel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.disputes}</div>
            <p className="text-xs text-muted-foreground">-2 from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gigs Awaiting Review</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.gigsAwaitingReview}</div>
            <p className="text-xs text-muted-foreground">+5 new submissions</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Admin Module Categories */}
      <h2 className="text-xl font-semibold mb-4">Admin Modules</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <FileText size={24} className="mb-2" />
              <h3 className="font-medium">Gig Moderation</h3>
              <p className="text-sm text-gray-500">Review and approve pending gigs</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <DollarSign size={24} className="mb-2" />
              <h3 className="font-medium">Transactions & Payouts</h3>
              <p className="text-sm text-gray-500">Manage financial operations</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Settings size={24} className="mb-2" />
              <h3 className="font-medium">Feature Flag Editor</h3>
              <p className="text-sm text-gray-500">Control platform features</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Award size={24} className="mb-2" />
              <h3 className="font-medium">Assign XP / Badges</h3>
              <p className="text-sm text-gray-500">Manage user rewards</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <MessageSquare size={24} className="mb-2" />
              <h3 className="font-medium">Chat Monitoring</h3>
              <p className="text-sm text-gray-500">Review communication logs</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Gavel size={24} className="mb-2" />
              <h3 className="font-medium">Dispute Manager</h3>
              <p className="text-sm text-gray-500">Handle user complaints</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
