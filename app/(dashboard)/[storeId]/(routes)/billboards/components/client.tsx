"use client"
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import Heading from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { BillboardColumn, columns } from './columns'
import { ApiList } from '@/components/ui/api-list'

interface BillboardClientProps {
    data: BillboardColumn[]
}

const BillboardClient: React.FC<BillboardClientProps> = ({data}) => {
    const router = useRouter();
    const params = useParams();
    return (
        <>
            <div className='flex items-center justify-between'>
                <Heading 
                    title={`Billboards (${data.length})`}
                    description='Manage billboards for you store'
                />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className='mr-2 h-4 w-4' />
                    Add new
                </Button>
            </div>
            <Separator />
            <DataTable searchKey='label' columns={columns} data={data} />
            <Heading title='API' description='API call for Billboards' />
            <Separator />
            <ApiList entityIdName='billboards' entityName='billboardId' />
        </>
    )
}

export default BillboardClient