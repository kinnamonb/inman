export class Item {
	id: number;
	name: string;
	img: string;
	in: boolean;
	serial: string;
	attrs: object;
}

export const DUMMY_ITEMS: Item[] = [
	{
		id: 0,
		name: 'OptiPlex 9020',
		img: 'http://placekitten.com/100/100',
		in: true,
		serial: 'ABCDEFG',
		attrs: {
			UMD: "1234567",
			One: "1",
			Two: "2",
			Three: "3"
		}
	},
	{
		id: 0,
		name: 'OptiPlex 9020',
		img: 'http://placekitten.com/100/100',
		in: false,
		serial: 'ABCDEFG',
		attrs: {}
	},
	{
		id: 0,
		name: 'OptiPlex 9020',
		img: 'http://placekitten.com/100/100',
		in: true,
		serial: 'ABCDEFG',
		attrs: {}
	},
	{
		id: 0,
		name: 'OptiPlex 9020',
		img: 'http://placekitten.com/100/100',
		in: true,
		serial: 'ABCDEFG',
		attrs: {}
	}
];