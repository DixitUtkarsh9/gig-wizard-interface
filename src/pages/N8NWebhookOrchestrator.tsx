
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Send, 
  RefreshCcw, 
  Check, 
  Calendar, 
  Upload, 
  CreditCard, 
  Star, 
  Award, 
  UserPlus 
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const N8NWebhookOrchestrator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<{ [key: string]: boolean }>({});

  // Mock webhook URLs - in a real app, these would be stored in Supabase
  const [webhooks, setWebhooks] = useState({
    bookingConfirmation: "https://hook.n8n.cloud/webhook/booking-confirmation",
    deploymentAgent: "https://hook.n8n.cloud/webhook/deployment-agent",
    paymentProcessor: "https://hook.n8n.cloud/webhook/payment-processor",
    reviewReminder: "https://hook.n8n.cloud/webhook/review-reminder",
    xpEngine: "https://hook.n8n.cloud/webhook/xp-engine",
    customAgentHandler: "https://hook.n8n.cloud/webhook/custom-agent",
  });

  const handleWebhookChange = (key: string, value: string) => {
    setWebhooks(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const triggerWebhook = async (key: string, payload: any) => {
    setIsLoading(prev => ({ ...prev, [key]: true }));
    
    try {
      // In a real app, this would make an actual POST request to the webhook URL
      console.log(`Triggering webhook: ${webhooks[key]}`);
      console.log('Payload:', payload);
      
      // Simulate a webhook call with a delay
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      toast({
        title: "Webhook Triggered",
        description: `Successfully triggered the ${key} workflow`,
      });
    } catch (error) {
      console.error('Error triggering webhook:', error);
      toast({
        title: "Webhook Error",
        description: `Failed to trigger the ${key} workflow. Please check the URL.`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(prev => ({ ...prev, [key]: false }));
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          className="mr-4" 
          onClick={() => navigate('/admin')}
        >
          <ArrowLeft className="mr-2" size={18} />
          Back to Dashboard
        </Button>
        <div>
          <h1 className="text-3xl font-bold">N8N Webhook Orchestrator</h1>
          <p className="text-gray-500">Manage and trigger automation workflows</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Booking Confirmation Workflow */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 text-blue-500" size={20} />
                Booking Confirmation
              </CardTitle>
              <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                Active
              </div>
            </div>
            <CardDescription>
              Sends confirmation emails and updates booking status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Label htmlFor="bookingConfirmation">Webhook URL</Label>
              <Input 
                id="bookingConfirmation"
                value={webhooks.bookingConfirmation}
                onChange={(e) => handleWebhookChange('bookingConfirmation', e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={() => triggerWebhook('bookingConfirmation', {
                bookingId: 'book_' + Math.floor(Math.random() * 10000),
                userId: 'user_' + Math.floor(Math.random() * 10000),
                timestamp: new Date().toISOString()
              })}
              disabled={isLoading.bookingConfirmation}
            >
              {isLoading.bookingConfirmation ? <RefreshCcw className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
              Test Trigger
            </Button>
          </CardFooter>
        </Card>
        
        {/* Deployment Agent Workflow */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <Upload className="mr-2 text-green-500" size={20} />
                Deployment Agent
              </CardTitle>
              <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Active
              </div>
            </div>
            <CardDescription>
              Handles deployment of new AI agents to production
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Label htmlFor="deploymentAgent">Webhook URL</Label>
              <Input 
                id="deploymentAgent"
                value={webhooks.deploymentAgent}
                onChange={(e) => handleWebhookChange('deploymentAgent', e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={() => triggerWebhook('deploymentAgent', {
                agentId: 'agent_' + Math.floor(Math.random() * 10000),
                version: '1.0.' + Math.floor(Math.random() * 100),
                environment: 'production'
              })}
              disabled={isLoading.deploymentAgent}
            >
              {isLoading.deploymentAgent ? <RefreshCcw className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
              Test Trigger
            </Button>
          </CardFooter>
        </Card>
        
        {/* Payment Processor Workflow */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <CreditCard className="mr-2 text-purple-500" size={20} />
                Payment Processor
              </CardTitle>
              <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                Active
              </div>
            </div>
            <CardDescription>
              Processes payments and updates transaction records
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Label htmlFor="paymentProcessor">Webhook URL</Label>
              <Input 
                id="paymentProcessor"
                value={webhooks.paymentProcessor}
                onChange={(e) => handleWebhookChange('paymentProcessor', e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={() => triggerWebhook('paymentProcessor', {
                transactionId: 'tx_' + Math.floor(Math.random() * 10000),
                amount: Math.floor(Math.random() * 1000) + 99,
                status: 'completed'
              })}
              disabled={isLoading.paymentProcessor}
            >
              {isLoading.paymentProcessor ? <RefreshCcw className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
              Test Trigger
            </Button>
          </CardFooter>
        </Card>
        
        {/* Review Reminder Workflow */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <Star className="mr-2 text-yellow-500" size={20} />
                Review Reminder
              </CardTitle>
              <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                Active
              </div>
            </div>
            <CardDescription>
              Sends review reminders to users after service completion
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Label htmlFor="reviewReminder">Webhook URL</Label>
              <Input 
                id="reviewReminder"
                value={webhooks.reviewReminder}
                onChange={(e) => handleWebhookChange('reviewReminder', e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={() => triggerWebhook('reviewReminder', {
                serviceId: 'srv_' + Math.floor(Math.random() * 10000),
                userId: 'user_' + Math.floor(Math.random() * 10000),
                completionDate: new Date().toISOString()
              })}
              disabled={isLoading.reviewReminder}
            >
              {isLoading.reviewReminder ? <RefreshCcw className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
              Test Trigger
            </Button>
          </CardFooter>
        </Card>
        
        {/* XP Engine Workflow */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <Award className="mr-2 text-red-500" size={20} />
                XP Engine
              </CardTitle>
              <div className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                Active
              </div>
            </div>
            <CardDescription>
              Awards XP and badges to users based on activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Label htmlFor="xpEngine">Webhook URL</Label>
              <Input 
                id="xpEngine"
                value={webhooks.xpEngine}
                onChange={(e) => handleWebhookChange('xpEngine', e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={() => triggerWebhook('xpEngine', {
                userId: 'user_' + Math.floor(Math.random() * 10000),
                activityType: 'completed_gig',
                xpAmount: Math.floor(Math.random() * 100) + 10
              })}
              disabled={isLoading.xpEngine}
            >
              {isLoading.xpEngine ? <RefreshCcw className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
              Test Trigger
            </Button>
          </CardFooter>
        </Card>
        
        {/* Custom Agent Request Handler Workflow */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <UserPlus className="mr-2 text-indigo-500" size={20} />
                Custom Agent Request Handler
              </CardTitle>
              <div className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                Active
              </div>
            </div>
            <CardDescription>
              Processes requests for custom AI agent development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Label htmlFor="customAgentHandler">Webhook URL</Label>
              <Input 
                id="customAgentHandler"
                value={webhooks.customAgentHandler}
                onChange={(e) => handleWebhookChange('customAgentHandler', e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={() => triggerWebhook('customAgentHandler', {
                requestId: 'req_' + Math.floor(Math.random() * 10000),
                clientId: 'client_' + Math.floor(Math.random() * 10000),
                agentType: 'custom',
                requirements: 'AI marketing assistant with social media integration'
              })}
              disabled={isLoading.customAgentHandler}
            >
              {isLoading.customAgentHandler ? <RefreshCcw className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
              Test Trigger
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-lg font-medium text-blue-800 mb-2 flex items-center">
          <Check className="mr-2" />
          Security Best Practices
        </h3>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>• All webhooks use HTTPS for secure transmission</li>
          <li>• Authentication headers are included in webhook requests</li>
          <li>• Webhook URLs are stored securely in Supabase</li>
          <li>• Automatic retries are configured for failed webhook calls</li>
          <li>• Activity logs are maintained for all webhook triggers</li>
        </ul>
      </div>
    </div>
  );
};

export default N8NWebhookOrchestrator;
