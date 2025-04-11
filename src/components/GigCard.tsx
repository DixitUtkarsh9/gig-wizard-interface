
import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface GigCardProps {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  priceType: 'hourly' | 'fixed';
  authorName: string;
  featured?: boolean;
  categories: string[];
}

const GigCard = ({ 
  id, 
  title, 
  imageUrl, 
  price, 
  priceType, 
  authorName, 
  featured = false,
  categories
}: GigCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white card-hover">
      <div className="relative">
        <img 
          src={imageUrl || "https://placehold.co/600x400?text=AI+Gig"} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        
        {featured && (
          <span className="absolute top-2 right-2 badge-feature">
            Featured
          </span>
        )}
        
        <button className="absolute top-2 left-2 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
          <Heart size={18} className="text-gray-500 hover:text-red-500" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {categories.map((category, index) => (
            <Badge key={index} className="badge-category">
              {category}
            </Badge>
          ))}
        </div>
        
        <Link to={`/gig/${id}`}>
          <h3 className="font-bold text-lg mb-2 hover:text-secondary transition-colors">{title}</h3>
        </Link>
        
        <div className="flex items-center mb-3">
          <div className="text-gray-500 text-sm">by <span className="font-medium">{authorName}</span></div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-xl">${price}</span>
            <span className="text-gray-500 text-sm ml-1">
              ({priceType === 'hourly' ? 'Hourly' : 'Fixed'})
            </span>
          </div>
          
          <Button variant="default" className="bg-primary text-white hover:bg-primary/90">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GigCard;
