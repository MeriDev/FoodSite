import { Card, CardContent, CardHeader, CardFooter } from './ui/card';

import { Skeleton } from './ui/skeleton';

const LoadingSkeleton = () => {
  return (
    <main className=" w-full">
      <div className="grid grid-cols-3 gap-8">
        {'abcedrfhi'.split('').map(i => (
          <Card key={i} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <Skeleton className="w-12 h-12 rounded-full" />
              <Skeleton className="h-6 flex-grow" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 flex-grow mt-4" />
              <Skeleton className="h-4 flex-grow mt-4" />
              <Skeleton className="h-4 w-1/2 mt-4" />
            </CardContent>
            <CardFooter>
              <Skeleton className="w-28 h-12 " />
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default LoadingSkeleton;
