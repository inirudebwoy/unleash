import { createSchemaObject, CreateSchemaType } from '../types';

const schema = {
    type: 'object',
    required: ['name'],
    properties: {
        name: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        type: {
            type: 'string',
        },
        stale: {
            type: 'string',
        },
        archived: {
            type: 'string',
        },
        createdAt: {
            type: 'string',
        },
        impressionData: {
            type: 'boolean',
        },
    },
    'components/schemas': {},
} as const;

export type UpdateFeatureSchema = CreateSchemaType<typeof schema>;

export const updateFeatureSchema = createSchemaObject(schema);
