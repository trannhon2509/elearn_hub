import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

interface CardData {
    title: string;
    icon: React.ComponentType<{ className: string }>;
    iconClass: string;
    borderClass: string;
    value: string;
    description: string;
}

const CardList: React.FC<{ cards: CardData[], loading?: boolean }> = ({ cards, loading }) => {
    console.log('CardList render')
    return (
        <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, index) => (
                <Card key={index} className={`card-pastel ${card.borderClass}`}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        {loading ? <Skeleton className="h-4 w-[100px] md:w-[150px]" /> : <CardTitle className="text-sm font-medium">{card.title}</CardTitle>}
                        {loading ? <Skeleton className="h-4 w-4" /> :  <card.icon className={`h-4 w-4 ${card.iconClass}`} /> }
                    </CardHeader>
                    <CardContent>
                        {loading ? <Skeleton className="h-8 mb-1 w-[40px] md:h-9 md:w-[50px]" /> : <div className="text-2xl font-bold mb-1">{card.value}</div>}
                        {loading ? <Skeleton className="h-4 w-[80%]" /> : <p className="text-xs text-muted-foreground">{card.description}</p>}
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default CardList
