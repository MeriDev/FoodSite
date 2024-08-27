import { useEffect, useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

import LoadingSkeleton from '@/LoadingSkeleton';

interface Recipes {
  id: string;
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
}

function Home() {
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const response = await fetch('http://localhost:4000/recipes');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        await new Promise(resolve => setTimeout(resolve, 3000));
        setIsLoading(true);
        const data: Recipes[] = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    };
    getRecipes();
  }, []);

  return (
    <>
      <nav>
        <h1>Recipes for Ninjas</h1>
      </nav>

      <main>
        {isloading ? (
          <div className="grid grid-cols-3 gap-8">
            {recipes.map(recipe => (
              <Card key={recipe.id} className="flex flex-col justify-between">
                <CardHeader className="flex-row gap-4 items-center">
                  <Avatar>
                    <AvatarImage
                      src={`img/${recipe.image}`}
                      alt="recipe image"
                    />
                    <AvatarFallback>{recipe.title.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{recipe.title}</CardTitle>
                    <CardDescription>
                      {recipe.time} mins to cook
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{recipe.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button>View recipe</Button>
                  {recipe.vegan && <Badge variant="secondary">Vegan!</Badge>}
                </CardFooter>
              </Card>
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
