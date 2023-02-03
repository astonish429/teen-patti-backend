export {
  create as baseCreate,
  createMany as baseBulkCreate,
  list as baseList,
  update as baseUpdate,
  remove as baseRemove,
  detail as baseDetail,
  detailById as baseDetailById,
  findAndCount as baseFindAndCount,
};

function create(modal: any, data: Object, opts?: Object) {
  let entity = new modal(data);

  return entity.save(opts);
}

function createMany(modal: any, data: any,opts?:Object) {
  return modal.insert(data,opts);
}

function list(modal: any, params: any) {
  let entity = modal.find(params.searchParams || {});
  if (params.select) {
    entity.select(params.select);
  }
  if (params.distinct) {
    entity.distinct(params.distinct);
  }
  if (params.order) {
    entity.order(params.order);
  }
  if (params.skip) {
    entity.skip(params.skip);
  }
  if (params.limit) {
    entity.take(params.limit);
  }
 
  return entity.exec();
}

function detail(modal: any, params: any) {
  let entity = modal.findOne(params.searchParams || {});

  if (params.select) {
    entity.select(params.select);
  }

  return entity.exec();
}

function detailById(modal: any, ids:any[] , params: any) {
  let entity = modal.findByIds(ids);

  if (params) {
    if (params.select) {
      entity.select(params.select);
    }
  }

  return entity.exec();
}

function update(modal: any, searchParams: any, data: any, options = {}) {
  return modal.update(searchParams, data, options).exec();
}

function findAndCount(modal: any, searchParams: any) {
  return modal.findAndCount(searchParams).exec();
}

function remove(modal: any, searchParams: any) {
  return modal.delete(searchParams);
}

