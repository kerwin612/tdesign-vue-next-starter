export const COLUMNS = [
  { colKey: 'row-select', type: 'multiple', width: '50' },
  {
    title: '合同名称',
    minWidth: '200',
    width: 200,
    align: 'left',
    ellipsis: true,
    colKey: 'name',
  },
  {
    title: '合同状态',
    colKey: 'status',
    width: 150,
    cell: { col: 'status' },
  },
  {
    title: '合同编号',
    minWidth: '100',
    width: 100,
    ellipsis: true,
    colKey: 'no',
  },
  {
    title: '合同类型',
    width: 150,
    minWidth: '150',
    ellipsis: true,
    colKey: 'contractType',
  },
  {
    title: '合同收付类型',
    width: 200,
    minWidth: '200',
    ellipsis: true,
    colKey: 'paymentType',
  },
  {
    title: '合同金额 (元)',
    width: 300,
    minWidth: '300',
    ellipsis: true,
    colKey: 'amount',
  },
  {
    align: 'left',
    fixed: 'right',
    width: 200,
    ellipsis: true,
    colKey: 'op',
    title: '操作',
  },
];
