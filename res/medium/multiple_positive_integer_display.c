/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "../my_printf.h"

int main() {

    my_printf("%d %d", 42, 0x7fffffff); // "42 2147483647"

    return 0;
}
