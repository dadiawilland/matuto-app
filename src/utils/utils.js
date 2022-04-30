export const getRolesMap = (roleIdList) => {
  const roles = [];
  const rolesList = ['admin', 'partner', 'normal'];

  if (roleIdList.length > 0) {
    roleIdList.forEach((roleId) => roles.push(rolesList[roleId - 1]));
  }

  return roles;
};
