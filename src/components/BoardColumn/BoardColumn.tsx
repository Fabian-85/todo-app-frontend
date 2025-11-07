import React from 'react';

type BoardColumnProps = {
  title: string;
};

function BoardColumn({ title }: BoardColumnProps) {
   
    return (
      <div className="text-center">
        <h2 className="text-4xl font-bold text-blue-700">
         {title}
        </h2>
      </div>
    );

  }

export default BoardColumn;