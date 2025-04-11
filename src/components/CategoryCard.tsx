
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  link: string;
}

const CategoryCard = ({ title, icon, link }: CategoryCardProps) => {
  return (
    <Link to={link} className="block">
      <div className="bg-white rounded-lg p-6 shadow-md text-center card-hover">
        <div className="mb-4 text-secondary">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
