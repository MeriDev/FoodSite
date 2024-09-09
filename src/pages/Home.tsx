import { useEffect, useState } from 'react';
import { Recipe } from '@/lib/types/recipe';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import RecipeCard from '@/components/RecipeCard';

function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch('http://localhost:4000/recipes');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(true);
        const data: Recipe[] = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    };
    getRecipes();
  }, []);

  return (
    <>
      <main>
        {isloading ? (
          <div className="grid md:grid-cols-3 gap-8 sm:px-4 sm:grid-cols-1">
            {recipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <LoadingSkeleton />
        )}
      </main>
    </>
  );
}

export default Home;
